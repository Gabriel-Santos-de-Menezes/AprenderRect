import React, {cloneElement} from "react"

export default props =>{
    return (
        <div>
            {/* {...props} tudo parâmetro do pai vai para o filho */}
            {/* 
                <FamiliaMembro nome="Pedro" sobrenome={props.sobrenome}/>
                <FamiliaMembro nome="Ana" {...props} />
                <FamiliaMembro nome="Gabriel" sobrenome="Ferreira" />
            */}
            {
                props.children.map((child, i) =>{
                    return cloneElement(child,{...props, key: i} )
                })
            }
            
        </div>
    )
}