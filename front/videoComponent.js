class Video extends React.Component {

    constructor(props) {
        super(props);
        this.socket = io();
        this.actionNew='PAUSE';
        this.mainVideo = React.createRef();

        this.connectSocket();
    }

    connectSocket(){
        this.socket.on('action', function(action){
            console.log('msg action', action);
            if(action=='PLAY'){
                this.actionNew='PAUSE';
                this.setState({ actionNew: 'PAUSE'})
                this.mainVideo.current.play();
            }else{
                this.actionNew='PLAY';
                this.setState({ actionNew: 'PLAY'})
                this.mainVideo.current.pause();
            }
        }.bind(this));
    }

    handleClick(action) {
        console.log('cambiando accion... ', action);
        this.socket.emit('action', action); 
    }

    render() {
        return (
            <div>
                <div class="containerBtn">
                    <button id="action" type="button" class="btn btn-primary" onClick={() => this.handleClick(this.actionNew)}>{this.actionNew}</button>
                </div>
        
                <video ref={this.mainVideo} id="mainVideo" controls loop="true" autoplay="autoplay" muted="muted" loop="loop" playsinline="playsinline" preload="metadata" data-aos="fade-up">
                    <source src="/video.mp4" type="video/mp4" />
                    Tu navegador no soporta videos.
                </video>
      </div>);
    }

}





