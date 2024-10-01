async function Click(){
    let data=await fetch("https://d2330pufzy0cvr.cloudfront.net/carousel-products/e214fead-96be-4825-b935-d602198e1914-4EFBA2BDEE2676B85C2878B615B63CE2.json")
    let OriginalData=await data.json()
    console.log(OriginalData)
}
