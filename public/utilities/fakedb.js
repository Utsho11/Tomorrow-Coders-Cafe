const addToDb = id => {
    let ApplyingJob = {};
    console.log(id);
    
    const storeApplyJob = localStorage.getItem('Applying-Job');

    if(storeApplyJob){
        ApplyingJob = JSON.parse(storeApplyJob)
    }

    const quantity = ApplyingJob[id]
    if(quantity){
        const newQuantity = quantity + 1;
        ApplyingJob[id] = newQuantity;
    }
    else{
        ApplyingJob[id] = 1;
    }

    localStorage.setItem('Applying-Job',JSON.stringify(ApplyingJob));
}



export {
    addToDb  
}
