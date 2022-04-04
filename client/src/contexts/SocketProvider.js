import React, { useContext, useEffect, useState} from 'react'

const SocketContext = React.createContext()

export function useSocket() {
    return useContext(SocketContent)
}

export function SocketProvider( id, children ) {

    useEffect(() => {
        const newSocket = io('http://localhost:5000', { query: {id}}, [id])
        }
    )
  return (
    <SocketContext.Provider> value = {socket}
        {children}
    </SocketContext.Provider>
  )
}
