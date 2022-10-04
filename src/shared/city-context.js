import React , {createContext, useState} from "react";
export const CityContext=createContext()

export const CityProvider=(props)=>{
    const [cityId,setcityId]=useState(-1)

    return(
        <CityContext.Provider value={[cityId,setcityId]}>
            {props.children}
        </CityContext.Provider>
    )
}



export const MajmoeeContext=createContext()

export const MajmoeeProvider=(props)=>{
    const [majmoeeId,setmajmoeeId]=useState(-1)

    return(
        <MajmoeeContext.Provider value={[majmoeeId,setmajmoeeId]}>
            {props.children}
        </MajmoeeContext.Provider>
    )
}




export const ZirdasteContext=createContext()

export const ZirdasteProvider=(props)=>{
    const [zirdasteId,setzirdasteId]=useState(-1)

    return(
        <ZirdasteContext.Provider value={[zirdasteId,setzirdasteId]}>
            {props.children}
        </ZirdasteContext.Provider>
    )
}




export const DastebandiContext=createContext()

export const DastebandiProvider=(props)=>{
    const [dastebandiId,setdastebandiId]=useState(-1)

    return(
        <DastebandiContext.Provider value={[dastebandiId,setdastebandiId]}>
            {props.children}
        </DastebandiContext.Provider>
    )
}



export const ProductIdContext=createContext()

export const ProductIdProvider=(props)=>{
    const [productId,setproductId]=useState(-1)

    return(
        <ProductIdContext.Provider value={[productId,setproductId]}>
            {props.children}
        </ProductIdContext.Provider>
    )
}



export const TagIdContext=createContext()

export const TagIdProvider=(props)=>{
    const [TagId,setTagId]=useState(-1)

    return(
        <TagIdContext.Provider value={[TagId,setTagId]}>
            {props.children}
        </TagIdContext.Provider>
    )
}

export const GenderIdContext=createContext()

export const GenderIdProvider=(props)=>{
    const [GenderId,setGenderId]=useState(-1)

    return(
        <GenderIdContext.Provider value={[GenderId,setGenderId]}>
            {props.children}
        </GenderIdContext.Provider>
    )
}



export const ContentContext=createContext()

export const ContentProvider=(props)=>{
    const [Content,setContent]=useState("")

    return(
        <ContentContext.Provider value={[Content,setContent]}>
            {props.children}
        </ContentContext.Provider>
    )
}