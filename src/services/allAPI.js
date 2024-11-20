import Category from "../Components/Category";
import commonAPI from "./commonApi";
import SERVER_URL from "./server_url";




//save video

// save video api called by Add.jsx



export const addVideo=async(video)=>{
   return await commonAPI("POST",`${SERVER_URL}/allvideos`,video)
}



// fetching video details to show in view.jsx and then props sharing it to the videocard

export const getAllVideos=async()=>{
   return await commonAPI("GET",`${SERVER_URL}/allvideos`,"")
}



// api call for delete video card

export const deleteVideo=async(videoId)=>{
   return await commonAPI("DELETE",`${SERVER_URL}/allvideos/${videoId}`,{})
}




//save history api call videocard

export const saveHistory=async(video)=>{
   return await commonAPI("POST",`${SERVER_URL}/history`,video)
}




//fetch history history.jsx
export const getHistory=async()=>{
   return await commonAPI("GET",`${SERVER_URL}/history`,"")
}




// delete history


export const deleteHistory=async(videoId)=>{
   return await commonAPI("DELETE",`${SERVER_URL}/history/${videoId}`,{})
}


// to save category in json

export const handleCategory=async(categoryDetails)=>{
   return await commonAPI("POST",`${SERVER_URL}/allcategory`,categoryDetails)
}




//disply category names


export const getCategory=async()=>{
   return await commonAPI("GET",`${SERVER_URL}/allcategory`,"")
}



//delete Category

export const deletecat=async(videoId)=>{
   return await commonAPI("DELETE",`${SERVER_URL}/allcategory/${videoId}`,{})
}


//to get single video drag and drop

export const getSingleVideo=async(videoId)=>{
   return await commonAPI("GET",`${SERVER_URL}/allvideos/${videoId}`,"")
}


//to update category

export const updateCategory=async(categoryId,categoryDetails)=>{
   return await commonAPI("PUT",`${SERVER_URL}/allcategory/${categoryId}`,categoryDetails)
}



// api call for getting single category

export const getSingleCategory=async(CategoryId)=>{
   return await commonAPI("GET",`${SERVER_URL}/allcategory/${CategoryId}`,"")
}




