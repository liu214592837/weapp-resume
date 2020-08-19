const app = getApp();
import resumes from '../resumes/index'
import appInfo from '../appinfo';

module.exports = Behavior({
    data: {
        resume:resumes[appInfo.currentAppId]
    }
})