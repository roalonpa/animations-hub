

export default function Spacer() {
    return (
        <div style={{
            width: '100vw', 
            display: 'flex', 
            justifyContent: 'center', 
            marginTop: '2rem', 
            marginBottom: '2rem'
        }}>
            <div style={{
                width: '80vw',
                height: 2,
                backgroundColor: '#ccc',
            }}></div>
        </div>
    )
}