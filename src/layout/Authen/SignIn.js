import React from 'react'
function SignIn() {
  return (
    <div>
      <p className='mx-auto text-center'>{'Đăng nhập'}</p>
      <div className="mb-3">
        <input type="email" className="form-control" id="email" placeholder="Tên Người Dùng/Email" />
      </div>
      <div className="mb-3">
        <input type="password" className="form-control" id="password" placeholder="Mật khẩu" />
      </div>
      <div className="mb-3">
        <button type="submit" className="btn btn-primary form-control" id="submit" >{'Đăng nhập'}</button>
      </div>
    </div>
  )
}

export default SignIn