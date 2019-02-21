import {colors, measures, fonts} from './base';

export const flexContainer = {
    backgroundColor: colors.light,
    display: "flex",
    flexDirection: "row",
    padding: measures.margin * 0.75,
    alignItems: "center",
    marginLeft: "auto",
    marginRight: "auto"
}

export const calloutText = {
    fontFamily: fonts.primary,
    color: colors.light,
    fontSize: fonts.calloutSize
}

export const bodyText = {
    fontFamily: fonts.primary,
    color: colors.dark,
    fontSize: fonts.bodySize
}

export const headerText = {
    fontFamily: fonts.primary,
    color: colors.dark,
    fontSize: fonts.headerSize
}

export const captionText = {
    fontFamily: fonts.primary,
    color: colors.medium,
    fontSize: fonts.bodySize - 4
}