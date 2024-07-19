import React from "react";

function Profile(){
    const auth=localStorage.getItem('user');
    console.log(auth)
    return(<>
      <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100vh',
            backgroundColor: '#f0f0f0',
        }}>
            <div style={{
                backgroundColor: '#fff',
                boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
                padding: '20px',
                borderRadius: '8px',
                width: '90%',
                maxWidth: '400px',
            }}>
                <h2 style={{textAlign:'-webkit-center'}}>User Profile</h2>
                <div style={{ marginTop: '20px' }}>
                    <div style={{ display: 'flex', marginBottom: '10px' }}>
                        <div style={{ fontWeight: 'bold', width: '120px' }}>Name:</div>
                        <div style={{ flex: 1 }}>{JSON.parse(auth).name}</div>
                    </div>
                    <div style={{ display: 'flex', marginBottom: '10px' }}>
                        <div style={{ fontWeight: 'bold', width: '120px' }}>Email:</div>
                        <div style={{ flex: 1 }}>{JSON.parse(auth).Email}</div>
                    </div>
                    {/* Add more profile details as needed */}
                </div>
            </div>
        </div>
    
    </>)
}
export default Profile;