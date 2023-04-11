// use local storage to manage cart data
const addToDb = id => {
    let ApplyingJob = getApplyingJob();
    // add quantity
    const quantity = ApplyingJob[id];
    if (!quantity) {
        ApplyingJob[id] = 1;
    }
    else {
        const newQuantity = quantity + 1;
        ApplyingJob[id] = newQuantity;
    }
    localStorage.setItem('Applying-Job', JSON.stringify(ApplyingJob));
}

const removeFromDb = id => {
    const ApplyingJob = getApplyingJob();
    if (id in ApplyingJob) {
        delete ApplyingJob[id];
        localStorage.setItem('Applying-Job', JSON.stringify(ApplyingJob));
    }
}

const getApplyingJob = () => {
    let ApplyingJob = {};

    //get the shopping cart from local storage
    const storedCart = localStorage.getItem('Applying-Job');
    if (storedCart) {
        ApplyingJob = JSON.parse(storedCart);
    }
    return ApplyingJob;
}

const deleteApplyingJob = () => {
    localStorage.removeItem('Applying-Job');
}

export {
    addToDb,
    removeFromDb,
    getApplyingJob,
    deleteApplyingJob
}
