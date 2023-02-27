export interface Item {
  label:string
  fabricWeight: number,
  fabricWeightMax:number,
  fabricWeightMin: number,
  fabricWeightStep:number,
  fabricHeight: number,
  fabricHeightMin: number,
  fabricHeightMax: number,
  fabricHeightStep: number,
  fabricPileHeight: number,
  width: number,
  ghRatio: string,
  ghFiness: number,
  fabricnumber: string
  type: string,
}

export interface FabricItem {
    label: string,
    id: number, 
    fabricNumber:string, 
    imageicon:string, 
    pileheight: string, 
    fabricWeight: number, 
    width: number, 
    minfabricWeight: number,
    maxfabricWeight: number, 
    stepfabricWeight: number,
}
export const fabricexample: FabricItem[] =[
  {
    label: 'Fox', id: 1, fabricNumber: "T2202-01", imageicon: "./T2202-01.jpg", pileheight: "NonCut", fabricWeight: 1800, width: 153, minfabricWeight: 1300, maxfabricWeight: 2300, stepfabricWeight: 500
  },
  {
    label: 'Mink', id: 2, fabricNumber: "T2203-05", imageicon: "./T2203-05.jpg", pileheight: "19/22", fabricWeight: 1010, width: 150, minfabricWeight: 800, maxfabricWeight: 1100, stepfabricWeight: 500
  },
  {
    label: 'Mink', id: 3, fabricNumber: "T2203-06", imageicon: "./T2203-06.jpg", pileheight: "19/22", fabricWeight: 980, width: 152, minfabricWeight: 800, maxfabricWeight: 1100, stepfabricWeight: 500
  },
  {
    label: 'Rabbit', id: 4, fabricNumber: "T2202-12", imageicon: "./T2202-12.jpg", pileheight: "19/22", fabricWeight: 1040, width: 150, minfabricWeight: 1300, maxfabricWeight: 2300, stepfabricWeight: 500
  },
]

export const example : Item = {
  label: "Noname",
  fabricWeight: 0,
  fabricWeightMin: 0,
  fabricWeightMax: 0,
  fabricWeightStep:100,
  fabricHeight: 0,
  fabricHeightMin: 0,
  fabricHeightMax: 0,
  fabricHeightStep: 0,
  fabricPileHeight: 1800,
  width: 0,
  fabricnumber:"NonNumber",
  ghRatio: "0",
  ghFiness: 0,
  type: "Standard",
}

export const fabricTypesTable = [
  {
    label: 'Fox', 
    id: 1, 
    fabricNumber: "T2202-01", 
    imageicon: "./T2202-01.jpg", 
    clothNumber:"T2202-01C",
    pileheight: 76, 
    minpileheight: 51,
    maxpileheight: 102,
    steppileheight: 1,
    fabricWeight: 1800, 
    ghFiness : 27,
    ghRatio: "30%",
    width: 153, 
    minfabricWeight: 1300, 
    maxfabricWeight: 2300,
    stepfabricWeight: 500,
  },
  {
    label: 'Fox', 
    id: 2, 
    fabricNumber: "T2202-03", 
    imageicon: "./T2202-03.jpg", 
    clothNumber:"T2202-01C",
    pileheight: 89, 
    minpileheight: 51,
    maxpileheight: 102,
    steppileheight: 1,
    fabricWeight: 1800, 
    ghFiness:44,
    ghRatio:"30%",
    width: 153, 
    minfabricWeight: 1300, 
    maxfabricWeight: 2300,
    stepfabricWeight:500
  },
  {
    label: 'Fox', 
    id: 3, 
    fabricNumber: "T2202-04", 
    imageicon: "./T2202-04.jpg", 
    clothNumber:"T2202-01C",
    pileheight: 76, 
    minpileheight: 51,
    maxpileheight: 102,
    steppileheight: 1,
    fabricWeight: 1800, 
    ghFiness:27,
    ghRatio:"10%",
    width: 153, 
    minfabricWeight: 1300, 
    maxfabricWeight: 2300,
    stepfabricWeight: 500
  },
  {
    label: 'Fox', 
    id: 4, 
    fabricNumber: "T2202-05", 
    imageicon: "./T2202-05.jpg", 
    clothNumber:"T2202-01C",
    pileheight: 76, 
    minpileheight: 51,
    maxpileheight: 102,
    steppileheight: 1,
    fabricWeight: 1800, 
    ghFiness:27,
    ghRatio:"50%",
    width: 153, 
    minfabricWeight: 1300, 
    maxfabricWeight: 2300,
    stepfabricWeight: 500
  },
  {
    label: 'Fox', 
    id: 5, 
    fabricNumber: "T2202-06", 
    imageicon: "./T2202-06.jpg", 
    clothNumber:"T2202-01C",
    pileheight: 51, 
    minpileheight: 51,
    maxpileheight: 102,
    steppileheight: 1,
    fabricWeight: 1800, 
    ghFiness:27,
    ghRatio:"30%",
    width: 153, 
    minfabricWeight: 1300, 
    maxfabricWeight: 2300,
    stepfabricWeight: 500
  },
  {
    label: 'Fox', 
    id: 6, 
    fabricNumber: "T2202-07", 
    imageicon: "./T2202-07.jpg", 
    clothNumber:"T2202-01C",
    pileheight: 102, 
    minpileheight: 51,
    maxpileheight: 102,
    steppileheight: 1,
    fabricWeight: 1800, 
    ghFiness:27,
    ghRatio:"30%",
    width: 153, 
    minfabricWeight: 1300, 
    maxfabricWeight: 2300,
    stepfabricWeight: 500
  },
  {
    label: 'Fox', 
    id: 7, 
    fabricNumber: "T2202-08", 
    imageicon: "./T2202-08.jpg", 
    clothNumber:"T2202-01C",
    pileheight: 76, 
    minpileheight: 51,
    maxpileheight: 102,
    steppileheight: 1,
    fabricWeight: 1300, 
    ghFiness:27,
    ghRatio:"30%",
    width: 153, 
    minfabricWeight: 1300, 
    maxfabricWeight: 2300,
    stepfabricWeight: 500
  },
  {
    label: 'Fox', 
    id: 8, 
    fabricNumber: "T2202-09", 
    imageicon: "./T2202-09.jpg", 
    clothNumber:"T2202-01C",
    pileheight: 76, 
    minpileheight: 76,
    maxpileheight: 76,
    steppileheight: 1,
    fabricWeight: 2300, 
    ghFiness:27,
    ghRatio:"30%",
    width: 153, 
    minfabricWeight: 1300, 
    maxfabricWeight: 2300,
    stepfabricWeight: 500
  },
  {
    label: 'Fox', 
    id: 9, 
    fabricNumber: "T2202-10", 
    imageicon: "./T2202-10.jpg", 
    clothNumber:"T2202-01C",
    pileheight: 102, 
    minpileheight: 51,
    maxpileheight: 102,
    steppileheight: 1,
    fabricWeight: 1800, 
    ghFiness:35,
    ghRatio:"30%",
    width: 153, 
    minfabricWeight: 1300, 
    maxfabricWeight: 2300,
    stepfabricWeight: 500
  },
  {
    label: 'Fox', 
    id: 10, 
    fabricNumber: "T2202-16", 
    imageicon: "./T2202-16.jpg", 
    clothNumber:"T2202-01C",
    pileheight: 89, 
    minpileheight: 51,
    maxpileheight: 102,
    steppileheight: 1,
    fabricWeight: 1800, 
    ghFiness:35,
    ghRatio:"30%",
    width: 153, 
    minfabricWeight: 1300, 
    maxfabricWeight: 2300,
    stepfabricWeight: 500
  },
  {
    label: 'Fox', 
    id: 11, 
    fabricNumber: "T2202-17", 
    imageicon: "./T2202-17.jpg", 
    clothNumber:"T2202-01C",
    pileheight: 89, 
    minpileheight: 51,
    maxpileheight: 102,
    steppileheight: 1,
    fabricWeight: 1800, 
    ghFiness:27,
    ghRatio:"30%",
    width: 153, 
    minfabricWeight: 1300, 
    maxfabricWeight: 2300,
    stepfabricWeight: 500
  },
  {
    label: 'Mink', 
    id: 12, 
    fabricNumber: "T2203-05", 
    imageicon: "./T2203-05.jpg", 
    clothNumber:"T2203-05C",
    pileheight: 22, 
    minpileheight: 15,
    maxpileheight: 22,
    steppileheight: 1,
    fabricWeight: 1000, 
    ghFiness:18,
    ghRatio:"30%",
    width: 153, 
    minfabricWeight: 500, 
    maxfabricWeight: 1000,
    stepfabricWeight: 500
  },
  {
    label: 'Mink', 
    id: 13, 
    fabricNumber: "T2203-06", 
    imageicon: "./T2203-06icon.jpg", 
    clothNumber:"T2203-05C",
    pileheight: 22, 
    minpileheight: 15,
    maxpileheight: 22,
    steppileheight: 10,
    fabricWeight: 1000, 
    ghFiness:18,
    ghRatio:"50%",
    width: 153, 
    minfabricWeight: 500, 
    maxfabricWeight: 1000,
    stepfabricWeight: 500
  },
  {
    label: 'Mink', 
    id: 14, 
    fabricNumber: "T2203-07", 
    imageicon: "./T2203-07icon.jpg", 
    clothNumber:"T2203-05C",
    pileheight: 15, 
    minpileheight: 15,
    maxpileheight: 22,
    steppileheight: 1,
    fabricWeight: 1000, 
    ghFiness:18,
    ghRatio:"30%",
    width: 153, 
    minfabricWeight: 500, 
    maxfabricWeight: 1000,
    stepfabricWeight: 500
  },
  {
    label: 'Mink', 
    id: 15, 
    fabricNumber: "T2203-08", 
    imageicon: "./T2203-08icon.jpg", 
    clothNumber:"T2203-05C",
    pileheight: 22, 
    minpileheight: 15,
    maxpileheight: 22,
    steppileheight: 1,
    fabricWeight: 500, 
    ghFiness:18,
    ghRatio:"30%",
    width: 153, 
    minfabricWeight: 500, 
    maxfabricWeight: 1000,
    stepfabricWeight: 500
  },
  {
    label: 'Mink', 
    id: 15, 
    fabricNumber: "T2203-09", 
    imageicon: "./T2203-09icon.jpg", 
    clothNumber:"T2203-05C",
    pileheight: 22, 
    minpileheight: 15,
    maxpileheight: 22,
    steppileheight: 1,
    fabricWeight: 1000, 
    ghFiness:27,
    ghRatio:"30%",
    width: 153, 
    minfabricWeight: 500, 
    maxfabricWeight: 1000,
    stepfabricWeight: 500
  },
]

export const filteredList = computed(() => (furlabel: string) => {
  return FabricInfo.filter((fabricTypes) => fabricTypes.label.includes(furlabel)) 
})

export const rangetest : any = computed(() => (furlabel: string,range: number,furWeight: number, ghFiness:number,ghRatio:string) => {
  switch(furlabel){
      case "Fox":
        if(51 <= range && range < 76){
          return FabricInfo.filter((fabricTypes)=> fabricTypes.pileheight == 51 && fabricTypes.fabricWeight == furWeight && fabricTypes.ghFiness == ghFiness && fabricTypes.ghRatio.includes(ghRatio))
        }else if(76 <= range && range < 89){
          return FabricInfo.filter((fabricTypes) => fabricTypes.pileheight == 76 && fabricTypes.fabricWeight == furWeight && fabricTypes.ghFiness == ghFiness && fabricTypes.ghRatio.includes(ghRatio))
        }else if(89 <= range && range < 102){
          return FabricInfo.filter((fabricTypes) => fabricTypes.pileheight == 89 && fabricTypes.fabricWeight == furWeight && fabricTypes.ghFiness == ghFiness && fabricTypes.ghRatio.includes(ghRatio))
        }else if(89 <= range ){
          return FabricInfo.filter((fabricTypes) => fabricTypes.pileheight == 102 && fabricTypes.fabricWeight == furWeight && fabricTypes.ghFiness == ghFiness && fabricTypes.ghRatio.includes(ghRatio))
        }
      case "Mink":
        if(15 <= range && range < 22){
          return fabricTypesTable.filter((fabricTypes)=> fabricTypes.pileheight == 15 && fabricTypes.fabricWeight == furWeight && fabricTypes.ghFiness == ghFiness && fabricTypes.ghRatio.includes(ghRatio))
        }else if(22 <= range){
          return fabricTypesTable.filter((fabricTypes)=> fabricTypes.pileheight == 22 && fabricTypes.fabricWeight == furWeight && fabricTypes.ghFiness == ghFiness && fabricTypes.ghRatio.includes(ghRatio))
        }
    }
    
})


export const filteredImage = computed(() => (furlabel: string,furWeight:number,furPileHeight:number,ghFiness:number,ghRatio:string) => {
  return fabricTypesTable.filter((fabricTypes) => fabricTypes.label.includes(furlabel) && fabricTypes.fabricWeight == furWeight && fabricTypes.pileheight == furPileHeight && fabricTypes.ghFiness == ghFiness  && fabricTypes.ghRatio.includes(ghRatio))
})

export interface FabricinfoItem {
  label: string, 
  FabricType: string, 
  KnittingType: string,
  Silvernumbers: string,
  SharlingCur: string,
  Chipprint: string,
  width: number, 
  fabricWeight: number, 
  minfabricWeight: number, 
  maxfabricWeight: number,
  stepfabricWeight: number,
  pileheight: number, 
  minpileheight: number,
  maxpileheight: number,
  steppileheight: number,
  ghFiness : number,
  ghRatio: string,
}

export interface FabricImageInfoItem {
  FabricType: string, 
  Imagelabel: string,
  Color: string,
  ClothType: string,
  ClothImagePath:string,
  Imagepath: string,
  Order: number,
}

export interface PantoneMastaItem{
  Pantone:string,
  RGB:string,
}

export const FabricInfo :FabricinfoItem[]= [
  {
    label: 'Fox', 
    FabricType: "T2202-01", 
    KnittingType: "none",
    Silvernumbers:"none",
    SharlingCur:"none",
    Chipprint:"none",
    width: 153, 
    fabricWeight: 1800, 
    minfabricWeight: 1300, 
    maxfabricWeight: 2300,
    stepfabricWeight: 500,
    pileheight: 76, 
    minpileheight: 51,
    maxpileheight: 102,
    steppileheight: 1,
    ghFiness : 27,
    ghRatio: "30%",
  },
  {
    label: 'Fox', 
    FabricType: "T2202-03", 
    KnittingType: "none",
    Silvernumbers:"none",
    SharlingCur:"none",
    Chipprint:"none",
    fabricWeight: 1800, 
    minfabricWeight: 1300, 
    maxfabricWeight: 2300,
    stepfabricWeight:500,
    pileheight: 89, 
    minpileheight: 51,
    maxpileheight: 102,
    steppileheight: 1,
    ghFiness:44,
    ghRatio:"30%",
    width: 153, 

  },
  {
    label: 'Fox', 
    FabricType: "T2202-04", 
    KnittingType: "none",
    Silvernumbers:"none",
    SharlingCur:"none",
    Chipprint:"none",
    width: 153, 
    minfabricWeight: 1300, 
    maxfabricWeight: 2300,
    stepfabricWeight: 500,
    fabricWeight: 1800, 
    pileheight: 76, 
    minpileheight: 51,
    maxpileheight: 102,
    steppileheight: 1,
    ghFiness:27,
    ghRatio:"10%",
  },
  {
    label: 'Fox', 
    FabricType: "T2202-05", 
    KnittingType: "none",
    Silvernumbers:"none",
    SharlingCur:"none",
    Chipprint:"none",
    width: 153, 
    fabricWeight: 1800, 
    minfabricWeight: 1300, 
    maxfabricWeight: 2300,
    stepfabricWeight: 500,
    pileheight: 76, 
    minpileheight: 51,
    maxpileheight: 102,
    steppileheight: 1,
    ghFiness:27,
    ghRatio:"50%",
  },
  {
    label: 'Fox', 
    FabricType: "T2202-06", 
    KnittingType: "none",
    Silvernumbers:"none",
    SharlingCur:"none",
    Chipprint:"none",
    width: 153, 
    fabricWeight: 1800, 
    minfabricWeight: 1300, 
    maxfabricWeight: 2300,
    stepfabricWeight: 500,
    pileheight: 51, 
    minpileheight: 51,
    maxpileheight: 102,
    steppileheight: 1,
    ghFiness:27,
    ghRatio:"30%",

  },
  {
    label: 'Fox', 
    FabricType: "T2202-07", 
    KnittingType: "none",
    Silvernumbers:"none",
    SharlingCur:"none",
    Chipprint:"none",
    width: 153, 
    fabricWeight: 1800, 
    minfabricWeight: 1300, 
    maxfabricWeight: 2300,
    stepfabricWeight: 500,
    pileheight: 102, 
    minpileheight: 51,
    maxpileheight: 102,
    steppileheight: 1,
    ghFiness:27,
    ghRatio:"30%",

  },
  {
    label: 'Fox', 
    FabricType: "T2202-08", 
    KnittingType: "none",
    Silvernumbers:"none",
    SharlingCur:"none",
    Chipprint:"none",
    width: 153, 
    fabricWeight: 1300, 
    minfabricWeight: 1300, 
    maxfabricWeight: 2300,
    stepfabricWeight: 500,
    pileheight: 76, 
    minpileheight: 51,
    maxpileheight: 102,
    steppileheight: 1,
    ghFiness:27,
    ghRatio:"30%",
 
  },
  {
    label: 'Fox', 
    FabricType: "T2202-09", 
    KnittingType: "none",
    Silvernumbers:"none",
    SharlingCur:"none",
    Chipprint:"none",
    width: 153, 
    minfabricWeight: 1300, 
    maxfabricWeight: 2300,
    stepfabricWeight: 500,
    fabricWeight: 2300, 
    pileheight: 76, 
    minpileheight: 76,
    maxpileheight: 76,
    steppileheight: 1,
    ghFiness:27,
    ghRatio:"30%",

  },
  {
    label: 'Fox', 
    FabricType: "T2202-10", 
    KnittingType: "none",
    Silvernumbers:"none",
    SharlingCur:"none",
    Chipprint:"none",
    width: 153, 
    fabricWeight: 1800, 
    minfabricWeight: 1300, 
    maxfabricWeight: 2300,
    stepfabricWeight: 500,
    pileheight: 102, 
    minpileheight: 51,
    maxpileheight: 102,
    steppileheight: 1,
    ghFiness:35,
    ghRatio:"30%",

  },
  {
    label: 'Fox', 
    FabricType: "T2202-16", 
    KnittingType: "none",
    Silvernumbers:"none",
    SharlingCur:"none",
    Chipprint:"none",
    width: 153, 
    fabricWeight: 1800, 
    minfabricWeight: 1300, 
    maxfabricWeight: 2300,
    stepfabricWeight: 500,
    pileheight: 89, 
    minpileheight: 51,
    maxpileheight: 102,
    steppileheight: 1,
    ghFiness:35,
    ghRatio:"30%",

  },
  {
    label: 'Fox', 
    FabricType: "T2202-17", 
    KnittingType: "none",
    Silvernumbers:"none",
    SharlingCur:"none",
    Chipprint:"none",
    width: 153, 
    fabricWeight: 1800, 
    minfabricWeight: 1300, 
    maxfabricWeight: 2300,
    stepfabricWeight: 500,
    pileheight: 89, 
    minpileheight: 51,
    maxpileheight: 102,
    steppileheight: 1,
    ghFiness:27,
    ghRatio:"30%",

  },
  {
    label: 'Mink', 
    FabricType: "T2203-05", 
    KnittingType: "none",
    Silvernumbers:"none",
    SharlingCur:"none",
    Chipprint:"none",
    width: 153, 
    fabricWeight: 1000, 
    minfabricWeight: 500, 
    maxfabricWeight: 1000,
    stepfabricWeight: 500,
    pileheight: 22, 
    minpileheight: 15,
    maxpileheight: 22,
    steppileheight: 1,
    ghFiness:18,
    ghRatio:"30%",

  },
  {
    label: 'Mink', 
    FabricType: "T2203-06", 
    KnittingType: "none",
    Silvernumbers:"none",
    SharlingCur:"none",
    Chipprint:"none",
    width: 153, 
    fabricWeight: 1000, 
    minfabricWeight: 500, 
    maxfabricWeight: 1000,
    stepfabricWeight: 500,
    pileheight: 22, 
    minpileheight: 15,
    maxpileheight: 22,
    steppileheight: 10,
    ghFiness:18,
    ghRatio:"50%",

  },
  {
    label: 'Mink', 
    FabricType: "T2203-07", 
    KnittingType: "none",
    Silvernumbers:"none",
    SharlingCur:"none",
    Chipprint:"none",
    width: 153, 
    fabricWeight: 1000, 
    minfabricWeight: 500, 
    maxfabricWeight: 1000,
    stepfabricWeight: 500,
    pileheight: 15, 
    minpileheight: 15,
    maxpileheight: 22,
    steppileheight: 1,
    ghFiness:18,
    ghRatio:"30%",
  },
  {
    label: 'Mink', 
    FabricType: "T2203-08", 
    KnittingType: "none",
    Silvernumbers:"none",
    SharlingCur:"none",
    Chipprint:"none",
    width: 153, 
    fabricWeight: 500, 
    minfabricWeight: 500, 
    maxfabricWeight: 1000,
    stepfabricWeight: 500,
    pileheight: 22, 
    minpileheight: 15,
    maxpileheight: 22,
    steppileheight: 1,

    ghFiness:18,
    ghRatio:"30%",

  },
  {
    label: 'Mink', 
    FabricType: "T2203-09", 
    KnittingType: "none",
    Silvernumbers:"none",
    SharlingCur:"none",
    Chipprint:"none",
    width: 153, 
    fabricWeight: 1000, 
    minfabricWeight: 500, 
    maxfabricWeight: 1000,
    stepfabricWeight: 500,
    pileheight: 22, 
    minpileheight: 15,
    maxpileheight: 22,
    steppileheight: 1,
    ghFiness:27,
    ghRatio:"30%",

  },
]

export const  FabricImageInfo : FabricImageInfoItem[] = [
  {
    FabricType: "T2202-01", 
    Imagelabel: "jpg",
    Color: "TCX Black",
    ClothType: "T2202-01C",
    ClothImagePath: "./T2202-01C.jpg",
    Imagepath: "../T2202-01.jpg",
    Order: 1
  },{
    FabricType: "T2202-03", 
    Imagelabel: "jpg",
    Color: "TCX Black",
    ClothType: "T2202-01C",
    ClothImagePath: "./T2202-01C.jpg",
    Imagepath: "../T2202-03.jpg",
    Order: 2
  },{
    FabricType: "T2202-04", 
    Imagelabel: "jpg",
    Color: "TCX Black",
    ClothType: "T2202-01C",
    ClothImagePath: "./T2202-01C.jpg",
    Imagepath: "../T2202-04.jpg",
    Order: 3
  },{
    FabricType: "T2202-05", 
    Imagelabel: "jpg",
    Color: "TCX Black",
    ClothType: "T2202-01C",
    ClothImagePath: "./T2202-01C.jpg",
    Imagepath: "./T2202-05.jpg",
    Order: 4
  },{
    FabricType: "T2202-06", 
    Imagelabel: "jpg",
    Color: "TCX Black",
    ClothType: "T2202-01C",
    ClothImagePath: "./T2202-01C.jpg",
    Imagepath: "./T2202-06.jpg",
    Order: 5
  },{
    FabricType: "T2202-07", 
    Imagelabel: "jpg",
    Color: "TCX Black",
    ClothType: "T2202-01C",
    ClothImagePath: "./T2202-01C.jpg",
    Imagepath: "./T2202-07.jpg",
    Order: 6
  },{
    FabricType: "T2202-08", 
    Imagelabel: "jpg",
    Color: "TCX Black",
    ClothType: "T2202-01C",
    ClothImagePath: "./T2202-01C.jpg",
    Imagepath: "./T2202-08.jpg",
    Order: 7
  },{
    FabricType: "T2202-09", 
    Imagelabel: "jpg",
    Color: "TCX Black",
    ClothType: "T2202-01C",
    ClothImagePath: "./T2202-01C.jpg",
    Imagepath: "./T2202-09.jpg",
    Order: 8
  },{
    FabricType: "T2202-10", 
    Imagelabel: "jpg",
    Color: "TCX Black",
    ClothType: "T2202-01C",
    ClothImagePath: "./T2202-01C.jpg",
    Imagepath: "./T2202-10.jpg",
    Order: 9
  },{
    FabricType: "T2202-16", 
    Imagelabel: "jpg",
    Color: "TCX Black",
    ClothType: "T2202-01C",
    ClothImagePath: "./T2202-01C.jpg",
    Imagepath: "./T2202-16.jpg",
    Order: 10
  },{
    FabricType: "T2202-17", 
    Imagelabel: "jpg",
    Color: "TCX Black",
    ClothType: "T2202-01C",
    ClothImagePath: "./T2202-01C.jpg",
    Imagepath: "./T2202-17.jpg",
    Order: 11
  },{
    FabricType: "T2203-05", 
    Imagelabel: "jpg",
    Color: "TCX Dark Earth",
    ClothType: "T2203-05C",
    ClothImagePath: "./T2203-05C.jpg",
    Imagepath: "./T2203-05.jpg",
    Order: 12
  },{
    FabricType: "T2203-06", 
    Imagelabel: "jpg",
    Color: "TCX Dark Earth",
    ClothType: "T2203-05C",
    ClothImagePath: "./T2203-05C.jpg",
    Imagepath: "./T2203-06.jpg",
    Order: 13
  },{
    FabricType: "T2203-07", 
    Imagelabel: "jpg",
    Color: "TCX Dark Earth",
    ClothType: "T2203-05C",
    ClothImagePath: "./T2203-05C.jpg",
    Imagepath: "./T2203-07.jpg",
    Order: 14
  },{
    FabricType: "T2203-08", 
    Imagelabel: "jpg",
    Color: "TCX Dark Earth",
    ClothType: "T2203-05C",
    ClothImagePath: "./T2203-05C.jpg",
    Imagepath: "./T2203-08.jpg",
    Order: 15
  },{
    FabricType: "T2203-09", 
    Imagelabel: "jpg",
    Color: "TCX Dark Earth",
    ClothType: "T2203-05C",
    ClothImagePath: "./T2203-05C.jpg",
    Imagepath: "./T2203-09.jpg",
    Order: 16
  }
]

export const filterList = computed(() => (furlabel: string) => {
  return FabricInfo.filter((fabricTypes) => fabricTypes.label.includes(furlabel)) 
})

export const imageList = computed(() => (fabricNumber: string) => {
  return FabricImageInfo.filter((fabricTypes) => fabricTypes.FabricType.includes(fabricNumber)) 
 
})

export const filterInfo = computed(() => (furlabel: string,furWeight:number,furPileHeight:number,ghFiness:number,ghRatio:string) => {
  return FabricInfo.filter((fabricTypes) => fabricTypes.label.includes(furlabel) && fabricTypes.fabricWeight == furWeight && fabricTypes.pileheight == furPileHeight && fabricTypes.ghFiness == ghFiness  && fabricTypes.ghRatio.includes(ghRatio))
})


export const filterImage = computed(() => (FabricType:string) => {
  return FabricImageInfo.filter((fabricTypes) => fabricTypes.FabricType.includes(FabricType) )
})

export const filterImages = computed(() => (FabricType:string) => {
  const image =  FabricImageInfo.filter((fabricTypes) => fabricTypes.FabricType.includes(FabricType) )
})