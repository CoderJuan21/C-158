AFRAME .registerComponent("tour",{
    init:function(){
        this.placesContainer = this.el
        this.createCards()
    },
    createCards:function(){
        const thumbnailsRef = [
            {
                id:"budapest",
                title:"Budapest",
                url:"./assets/thumbnails/budapest.jpg"
            },
            {
                id:"eiffel_tower",
                title:"Eiffel Tower",
                url:"./assets/thumbnails/eiffel_tower.jpg"
            },
            {
                id:"new_york_city",
                title:"New Yorkkk City",
                url:"./assets/thumbnails/new_york_city.png"
            },
            {
                id:"taj_mahal",
                title:"Taj Mahal",
                url:"./assets/thumbnails/taj_mahal.png"
            },
        ];
        let previousXPosition = -60
        for(var item of thumbnailsRef){
            const posX=previousXPosition+25
            const posY=10
            const posZ=-40
            const position={x:posX,y:posY,z:posZ}
            previousXPosition = posX

            const borderEl = this.createBorder(position,item.id)
            const thumbnail = this.createThumbnail(item)
            borderEl.appendChild(thumbnail)

            const titleEl = this.createTitleEl(position,item)
            borderEl.appendChild(titleEl)
            this.placesContainer.appendChild(borderEl)
        }
    },
    createBorder:function(position,id){
const entityEl = document.createElement("a-entity")
entityEl.setAttribute("id",id)
entityEl.setAttribute("visible",true)
entityEl.setAttribute("position",position)
entityEl.setAttribute("geometry",{primitive:"ring",radiusInner:9,radiusOuter:10})
entityEl.setAttribute("material",{color:"#da620f",opacity:1,})
entityEl.setAttribute("cursor-listener",{})
return entityEl
    },
    createThumbnail:function(item){
        const entityEl = document.createElement("a-entity")
      //  entityEl.setAttribute("id",id)
        entityEl.setAttribute("visible",true)
        entityEl.setAttribute("geometry",{primitive:"circle",radius:9})
        entityEl.setAttribute("material",{src:item.url})
        return entityEl
            },
            createTitleEl:function(position,item){
                const entityEl = document.createElement("a-entity")
               // entityEl.setAttribute("id",id)
                entityEl.setAttribute("visible",true)
                const elPosition = position
                elPosition.y = -20
                entityEl.setAttribute("position",elPosition)
                entityEl.setAttribute("text",{font:"exo2bold",align:'center',width:70,color:"black",value:item.title})
                return entityEl
                    }
})