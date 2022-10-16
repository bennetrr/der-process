import platform from "platform";
import semver from "semver";

export default function isBrowserCompatible() {
    const {name, version} = platform;
    if (name == undefined || version == undefined) return false;

    const semVer = semver.coerce(version);
    if (semVer == null) return false;

    if (name == "IE") return false;
    if (name == "Microsoft Edge" && semver.lt(semVer, "17.0.0")) return false;

    if (name == "Firefox" && semver.lt(semVer, "103.0.0")) return false;
    if (name == "Firefox Mobile" && semver.lt(semVer, "103.0.0")) return false;

    if (name == "Chrome" && semver.lt(semVer, "76.0.0")) return false;
    if (name == "Chrome Mobile" && semver.lt(semVer, "76.0.0")) return false;

    if (name == "Opera" && semver.lt(semVer, "63.0.0")) return false;
    if (name == "Opera Mobile" && semver.lt(semVer, "54.0.0")) return false;

    if (name == "Safari" && semver.lt(semVer, "9.0.0")) return false;
    return true;
}
