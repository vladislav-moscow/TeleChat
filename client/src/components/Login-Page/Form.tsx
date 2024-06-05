"use client";
import React, { useState } from "react";
import Avatar from "./Avatar";
import { handleSubmit } from "@/lib/fetchers";
import { useRouter } from "next/navigation";


const Form = () => {
	const [avatarId, setAvatarId] = useState((Math.random() * 20).toFixed())
	const router = useRouter();

	return (
		<form onSubmit={(e)=>handleSubmit(e, router, avatarId)} className='flex flex-col gap-5'>
			{/* AVATAR */}
			<Avatar avatarId={avatarId} setAvatarId={setAvatarId}/>
			<div className='flex flex-col xl:flex-col gap-5'>
				<div className="form-control w-full">
					<label className="label">
						<span className="label-text text-lg">Как вас зовут?</span>
					</label>
					<input type="text" placeholder="Ваш никнейм" className="input input-bordered w-full" required />
				</div>
				<div className="form-control w-full">
					<label className="label">
						<span className="label-text text-lg">Адрес эл.почты</span>
					</label>
					<input type="email" placeholder="Ваш адрес эл.почты" className="input input-bordered w-full" required />
				</div>
				<button className='btn'>Войти</button>
			</div>
		</form>
	)
};

export default Form;
