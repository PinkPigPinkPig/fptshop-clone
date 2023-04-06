import React from 'react'

function SignUp() {
  return (
    <div>
      <p className='mx-auto text-center'>{'Đăng ký'}</p>
      <div className="mb-3">
        <input type="email" className="form-control" id="email" placeholder="Tên Người Dùng/Email" />
      </div>
      <div className="mb-3">
        <input type="password" className="form-control" id="password" placeholder="Mật khẩu" />
      </div>
      <div className="mb-3">
        <input type="passwordConfirm" className="form-control" id="password" placeholder="Nhập lại mật khẩu" />
      </div>
      <div className="mb-3">
        <button type="submit" className="btn btn-primary form-control" id="submit" >{'Đăng Ký'}</button>
      </div>
    </div>
  )
}

export default SignUp