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
    stepfabricWeight: 500
  },
  {
    label: 'Fox', 
    id: 2, 
    fabricNumber: "T2202-03", 
    imageicon: "./T2202-03.jpg", 
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
  return fabricTypesTable.filter((fabricTypes) => fabricTypes.label.includes(furlabel)) 
})

export const rangetest : any = computed(() => (furlabel: string,range: number,furWeight: number, ghFiness:number,ghRatio:string) => {
  switch(furlabel){
      case "Fox":
        if(51 <= range && range < 76){
          return fabricTypesTable.filter((fabricTypes)=> fabricTypes.pileheight == 51 && fabricTypes.fabricWeight == furWeight && fabricTypes.ghFiness == ghFiness && fabricTypes.ghRatio.includes(ghRatio))
        }else if(76 <= range && range < 89){
          return fabricTypesTable.filter((fabricTypes) => fabricTypes.pileheight == 76 && fabricTypes.fabricWeight == furWeight && fabricTypes.ghFiness == ghFiness && fabricTypes.ghRatio.includes(ghRatio))
        }else if(89 <= range && range < 102){
          return fabricTypesTable.filter((fabricTypes) => fabricTypes.pileheight == 89 && fabricTypes.fabricWeight == furWeight && fabricTypes.ghFiness == ghFiness && fabricTypes.ghRatio.includes(ghRatio))
        }else if(89 <= range ){
          return fabricTypesTable.filter((fabricTypes) => fabricTypes.pileheight == 102 && fabricTypes.fabricWeight == furWeight && fabricTypes.ghFiness == ghFiness && fabricTypes.ghRatio.includes(ghRatio))
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

