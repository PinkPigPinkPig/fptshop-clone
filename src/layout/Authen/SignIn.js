import React from 'react'
import { useForm } from 'react-hook-form';
function SignIn() {
  const { register, handleSubmit, watch, formState: { errors } } = useForm()
  const onSubmit = data => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <p className='mx-auto text-center'>{'Đăng nhập'}</p>
      <div className="mb-3">
        <input type="email" className="form-control" {...register("username")} placeholder="Tên Người Dùng/Email" />
      </div>
      <div className="mb-3">
        <input type="password" className="form-control" {...register("password")} placeholder="Mật khẩu" />
      </div>
      <div className="mb-3">
        <button type="submit" className="btn btn-primary form-control">{'Đăng nhập'}</button>
      </div>
    </form>
  )
}

export default SignIn