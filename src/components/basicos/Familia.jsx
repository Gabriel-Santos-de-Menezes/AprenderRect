import React from 'react'

export default props =>{
    return (
        <div>
            {/* {...props} tudo parâmetro do pai vai para o filho */}
            {/* 
                <FamiliaMembro nome="Pedro" sobrenome={props.sobrenome}/>
                <FamiliaMembro nome="Ana" {...props} />
                <FamiliaMembro nome="Gabriel" sobrenome="Ferreira" />
            */}
            {props.children}
        </div>
    )
}