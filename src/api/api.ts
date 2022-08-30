import axios from "axios";



const instance = axios.create({
    withCredentials:true,
    headers : {"API-KEY":"996c6b06-ddd3-48c1-9151-cc04e52f7eb7"},
    baseURL : 'https://social-network.samuraijs.com/api/1.0/'
})

export const usersAPI = {
    getUser(currentPage: number = 1, pageSize: number = 10) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`,).then(response => response.data)
    },

    unFollow(id: number) {
        return instance.delete(`follow/${id}`,)

    },

    follow(id: number) {
        return instance.post(`follow/${id}`,)
    },

    getProfile(userId:number){
        console.warn('need to fix request method')
        return  profileAPI.getProfile(userId)
        }
}

export const profileAPI = {
    getProfile(userId:number){
        return  instance.get(`profile/${userId}`)
    },
    getProfileStatus(userId:number){
        return  instance.get(`/profile/status/${userId}`)
    },
    updateProfileStatus(status:string){
        debugger
        return  instance.put(`/profile/status`, {status: status})
    },
}


export const authAPI = {
    authMe() {
        return instance.get(`auth/me`,).then(response => response.data)
    },
    login(email:string,password:string,rememberMe:boolean) {
        return instance.post(`auth/login`, {email,password,rememberMe})
    },
    logout() {
        return instance.delete(`auth/login` )
    },

}
