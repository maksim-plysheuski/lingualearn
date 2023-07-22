export const emailMessage = () => {
  return (
    `<div style='display: flex; justify-content: center; align-items: center; width: 380px; height: 560px; border-radius: 10px'>
            <div style='width: 90%; height: 90%; display: flex; flex-direction: column; align-items: flex-start; box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.1), -1px -1px 2px rgba(0, 0, 0, 0.2); background-color: rgba(50,96,255,0.11); border-radius: 15px;'>
                <div style='height: 100%; margin: 15px'>
                    <h3>Lingualearn</h3>
                    <div style='width: 100%; height: 2px; background-color: azure'></div>
                    <h2 style='margin: 20px 0 40px 0; font-family: "Arial Black", sans-serif'>Password reset</h2>
                    <span style="margin-top: 30px; font-size: 15px; font-family: 'Arial', sans-serif;">Hello,</span>
                    <p style="font-size: 15px; font-family: 'Arial', sans-serif">We've received a request to reset the
                        password for your account. Click the button below to change your password.</p>
                    <a href='http://localhost:3000/#/auth/set-new-password/$token$' style='height: 100%; width: 100%;'>
                        <button style=' cursor: pointer; border: 0; font-size: 16px; height: 35px; width: 100%; border-radius: 10px; background-color: rgba(54,110,255); color: white'>
                            Set New Password
                        </button>
                    </a>
                    <div style='margin-top: 25px'>
                        <span style="font-size: 15px; font-family: 'Arial', sans-serif; opacity: 0.6;">If you didn't request a new password, please ignore this email.</span>
                        <div style='width: 100%; height: 2px; background-color: azure; margin-top: 25px'></div>
                        <p style="margin-top: 10px; font-size: 14px; font-family: 'Arial', sans-serif">Thanks,</p>
                        <span style="font-size: 14px; font-family: 'Arial', sans-serif">Lingualearn Team</span>
                    </div>
                </div>
            </div>
    </div>`
  )
}