const app = {
    data() {
        return {
            picture: [{title: 'Geysers Valley',country: 'Russia',url: './images/Geysers Valley.jpg',like:false},
                    {title: 'Khumbu Valley',country: 'Nepal', url: './images/Khumbu Valley.jpg',like:false},
                    {title: 'Waipi’o Valley',country: 'Hawaii', url: './images/Waipi’o Valley.jpg',like:false},
                    {title: 'Doi Inthanon',country: 'Thailand',url:'./images/Doi Inthanon.jpg',like:false}
                ],
        filterResult:null,
        useSearch : false,
        resultNull: false,
        hasView : false,
        viewImg:'',
        inputSearch:''
        }
    },
    methods: {
        toggleLike(index){
            this.picture[index].like = !this.picture[index].like
        },
        toggleSearch(){
            this.filterResult = null;
            this.useSearch = !this.useSearch
        },
        toggleView(index){
            this.viewImg = this.picture[index].url;
            this.hasView = true;
        }
    },
    
    computed:{
        filterSearch(){
            this.filterResult = this.picture.filter(pic => pic.title.toLowerCase().search(this.inputSearch.toLowerCase()) > -1);
            if(this.filterResult == false){
                this.resultNull = true;
            }else{
                this.resultNull = false;
            }
            return this.inputSearch;
    },
     choosePicture(){
         return this.filterResult ?  this.filterResult : this.picture;
     }
    }

}
Vue.createApp(app).mount('#app')