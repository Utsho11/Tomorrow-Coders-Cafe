const addToDb = id => {
    let ApplyingJob = {};
    
    const storeApplyJob = localStorage.getItem('Applying-Job');

    if(storeApplyJob){
        ApplyingJob = JSON.parse(storeApplyJob)
    }

    const quantity = ApplyingJob[id]
    if(quantity){
        // const newQuantity = quantity + 1;
        // ApplyingJob[id] = newQuantity;
        alert("Already applied")
    }
    else{
        ApplyingJob[id] = 1;
    }

    localStorage.setItem('Applying-Job',JSON.stringify(ApplyingJob));
}

const getStoredData = () =>{
    let ApplyingJob = {};
    
    const storeApplyJob = localStorage.getItem('Applying-Job');

    if(storeApplyJob){
        ApplyingJob = JSON.parse(storeApplyJob)
    }
    return ApplyingJob;
}

export {
    addToDb,
    getStoredData
}
