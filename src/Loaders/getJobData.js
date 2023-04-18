import { getStoredData } from "../../public/utilities/fakedb";

export const getJobData = async () => {

    const applyJobData = await fetch("/feature-jobs.json")
    const jobData = await applyJobData.json()
    const savedApplyJob = getStoredData()
    let ApplyJob = [];
    for (const id in savedApplyJob) {
        const exists = jobData.find(job => job.id == id)
        if (exists) {
            exists.quantity = savedApplyJob[id];
            ApplyJob.push(exists);
        }
    }
    return { ApplyJob, jobData };
}

