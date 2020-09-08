import resumes from '../resumes/index'
import appInfo from '../appinfo';

export default Behavior({
    data: {
        resume:resumes[appInfo.currentAppId]
    }
})