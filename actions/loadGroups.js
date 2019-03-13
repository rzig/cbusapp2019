import {LOAD_GROUPS} from '../constants/actions';
import { AsyncStorage } from 'react-native';
import parseCreds from '../creds/parse';
const Parse = require('parse/react-native');

let loadedPanels = {}

/**
 * Gets the panel associated with the group from
 * parse. Uses the panels variable (outside the fn)
 * to cache already loaded panels, so if multiple
 * groups are using the same panel (likely), we
 * only have to load that panel once.
 * @param {object} group 
 */
function loadPanel(objectid) {
    return new Promise((resolve, reject) => {
        if(Object.keys(loadedPanels).indexOf(objectid) !== -1) {
            // This panel has already been loaded, no need
            // to fetch it again.
            resolve(panels[objectid]);
        }
        const MyCustomClass = Parse.Object.extend('Panel');
        const query = new Parse.Query(MyCustomClass);
        query.get(objectid).then(panel => {
            // Convert to JSON because parse
            // objects are a pain to use in other code
            let jsonpanel = {
                name:  panel.get("name"),
                image: panel.get("image"),
                about: panel.get("about"),
                price: panel.get("price"),
                wattsPerSf: panel.get("wattsPerSf")
            };
            loadedPanels[objectid] = jsonpanel;
            resolve(jsonpanel);
        }).catch(error => {
            console.warn(error);
            reject(error);
        });
    })
}

/**
 * Takes an array of Parse objects
 * and makes them standard JSON objects
 * like they should have always been
 * @param {array} results 
 */
function jsonify(results) {
    return results.map(result => {
        return {
            name: result.get("name"),
            oneliner: result.get("oneliner"),
            about: result.get("about"),
            image: result.get("image"),
            code: result.get("code"),
            private: result.get("private")
        }
    })
}

function loadGroups() {
    // The network request is async, so we can't
    // return something immediately. Instead, we
    // return a function taking one param (dispatch)
    return (dispatch) => {
        Parse.setAsyncStorage(AsyncStorage);
        Parse.serverURL = 'https://parseapi.back4app.com'; // This is your Server URL
        Parse.initialize(
            parseCreds.appid, // This is your Application ID
            parseCreds.key // This is your Javascript key
        );
        const MyCustomClass = Parse.Object.extend('Group');
        const query = new Parse.Query(MyCustomClass);
        query.find().then((results) => {
            const jsonResults = jsonify(results);
            const promises = results.map((result) => {
                return loadPanel(result.get("panel"));
            });
            Promise.all(promises).then(values => {
                Object.keys(jsonResults).forEach((key, index) => {
                    jsonResults[key].panel = values[index];
                });
                dispatch({type: LOAD_GROUPS, groups: jsonResults, success: true});
            })  
        }, (error) => {
            dispatch({type: LOAD_GROUPS, success: false});
        });
    }
}

export default loadGroups;