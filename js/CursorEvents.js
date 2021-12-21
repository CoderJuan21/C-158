AFRAME .registerComponent("cursor-listener",{
    schema:{
        selectedItemId:{default:"",type:"string"}
    },
    init:function(){
        this.handleMouseEnterEvents()
        this.handleMouseLeavesEvents()
    },
    handlePlacesListState:function(){
        const id = this.el.getAttribute("id")
        const placesId = ["budapest","eiffel_tower","new_york_city","taj_mahal"]
        if(placesId.includes(id)){
            const placeContainer = document.querySelector("#places-container")
            placeContainer.setAttribute("cursor-listener",{
                selectedItemId:id
            })
            this.el.setAttribute("material",{color:"#da620f",opacity:1})
        }
    },
    handleMouseEnterEvents:function(){
        this.el.addEventListener("mouseenter",()=>{
            this.handlePlacesListState()
        })
    },
    handleMouseLeavesEvents:function(){
        this.el.addEventListener("mouseleave",()=>{
            const {selectedItemId} = this.data
            if(selectedItemId){
                const el = document.querySelector(`#${selectedItemId}`)
                const id = el.getAttribute("id")
                if(id == selectedItemId){
                    el.setAttribute("material",{color:"green",opacity:1})
                }
            }
        })
    }
})