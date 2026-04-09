"use client"
import UserLayout from '../layout/UserLayout'
import DashboardLayout from '../layout/DashboardLayout';
import { useDispatch, useSelector } from 'react-redux'
import React,{ useEffect } from 'react'
import { getAllUsers } from '../config/redux/action/authAction'
import styles from "./index.module.css";
import { useRouter } from 'next/navigation'
import {viewProfile} from "../view_profile/[username]/page"

export default function Discoverpage({}) {
    const baseUrl ="https://proconnectlinkedclone.onrender.com/";

    const authState = useSelector((state) => state.auth)

    const dispatch = useDispatch();

    useEffect(() => {
        if(!authState.all_profiles_fetched){
            dispatch(getAllUsers());    
        }
    },[])

    const router = useRouter();

  return (
    <UserLayout>
        <DashboardLayout>
            <div>
                <h1>Discover</h1>
                <div className= {styles.allUserProfile}>
                 {authState.all_profiles_fetched && authState.all_users.map((user) => {
                    return(
                        <div onClick={() => {
                               router.push(`/view_profile/${user.userId.username}`)
                        }} key={user._id} className={styles.userCard}>
                            <img className={styles.userCard__image} src={`${baseUrl}/${user.userId.profilePicture}`} alt="profile"/>
                            <div>
                            <h1>{user.userId.name}</h1>
                            <p>{user.userId.username}</p>
                            </div>
                            </div>
                    )
                 })}
                </div>
            </div>
        </DashboardLayout>
    </UserLayout>
  )
}
