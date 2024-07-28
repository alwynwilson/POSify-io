import commonAPI from "./commonAPI";
import SERVERURL from "./serverurl";

export const registerAPI = async (reqBody)=>{
    return await commonAPI("POST",`${SERVERURL}/register`,reqBody)
}

export const loginAPI = async (reqBody)=>{
    return await commonAPI("POST",`${SERVERURL}/login`,reqBody)
}

export const updateUserAPI = async (userId,reqBody,reqHeader) => {
    return await commonAPI("PUT", `${SERVERURL}/updateUser/${userId}/update`, reqBody,reqHeader);
};

export const allProductsAPI = async (searchKey,reqHeader) => {
    return await commonAPI("GET", `${SERVERURL}/allproducts?search=${searchKey}`,"",reqHeader);
};