import {useEffect, useState} from "react";


type ProfileStatusPropsType = {
    status: string,
    setProfileStatus: (status: string) => void,
    updateStatus:(status:string)=>void

}

const ProfileStatus = (props: ProfileStatusPropsType) => {

    debugger
    const [editMode, setEditMode] = useState(false)
    const [status, setStatus] = useState( props.status)

    console.log(status)
    console.log(props.status)

    useEffect(()=>{
        setStatus( props.status)
    },[props.status])

    const setStatusHandler = (e: any) => {
        //props.setProfileStatus(e.currentTarget.value)
        setStatus(e.currentTarget.value)
    }

    const updateStatusHandler = ()=>{
        setEditMode(false)
        props.updateStatus(status)
        console.log(status)
    }

    return (<div>
            <div>
                {!editMode && <span onDoubleClick={() => setEditMode(true)}>{props.status || 'update status'}</span>}
            </div>
            <div>
                {editMode &&
                    <input type="text" value={status} autoFocus onChange={setStatusHandler}
                           onBlur={updateStatusHandler}/>
                }
            </div>
        </div>
    )
}

export default ProfileStatus;