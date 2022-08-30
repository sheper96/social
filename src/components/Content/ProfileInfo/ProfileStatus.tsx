import {useState} from "react";


type ProfileStatusPropsType = {
    status: string,
    setProfileStatus: (status: string) => void,
    updateStatus:(status:string)=>void

}

const ProfileStatus = (props: ProfileStatusPropsType) => {

    const [editMode, setEditMode] = useState(false)


    const setStatusHandler = (e: any) => {
        props.setProfileStatus(e.currentTarget.value)
    }

    const updateStatusHandler = ()=>{
        setEditMode(!editMode)
        props.updateStatus(props.status)
    }

    return (<div>
            <div>
                {!editMode && <span onDoubleClick={() => setEditMode(!editMode)}>{props.status || 'update status'}</span>}
            </div>
            <div>
                {editMode &&
                    <input type="text" value={props.status} autoFocus onChange={setStatusHandler}
                           onBlur={updateStatusHandler}/>
                }
            </div>
        </div>
    )
}

export default ProfileStatus;