import {INCREMENT} from '../constants/actions';

export default function increment(amount=1) {
    return {type: INCREMENT, amount: amount}
}
