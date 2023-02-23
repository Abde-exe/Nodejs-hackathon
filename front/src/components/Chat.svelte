<script>
    import {onMount} from 'svelte';
    import chevron_right_icon from '../lib/images/chevron-right.png';
    import send_icon from '../lib/images/send.png';
    import chat_icon from '../lib/images/chat.png';

    onMount(() => {
        let openChat = document.getElementById('openChat');
        let closeChat = document.getElementById('closeChat');
        let chat = document.getElementById('chat');
        
        openChat.addEventListener('click', function(){
            chat.classList.remove('translateRightChat');
            chat.classList.add('translateLeftChat');
        })

        closeChat.addEventListener('click', function(){
            chat.classList.remove('translateLeftChat');
            chat.classList.add('translateRightChat');
        })
    });

</script>
<section>
    <div id="openChat" class="openChat">
        <img src="{chat_icon}" alt="Open" for="btnControl">
    </div>
    <div id="chat" class="chat translateRightChat">
        <div>
            <div class="chatHeader">
                <img id="closeChat" src="{chevron_right_icon}" alt="Quit">
            </div>
            <ul id="listMessage" class="listMessage">
            </ul>
        </div>
        <div class="sendMessage">
            <input type="text" placeholder="Votre message">
            <img id="iconSend" src="{send_icon}" alt="Send">
        </div>
    </div>
</section>

<style>
    .openChat {
        position: absolute;
        bottom: 20px;
        right: 20px;
        padding: 10px;
        background: rgb(5, 67, 64);
        border-radius: 50%;
        cursor: pointer;
    }

    .openChat img {
        width: 35px;
        height: 35px;
        cursor: pointer;
    }

    .chat {
        position: absolute;
        right: 0;
        height: 100vh;
        width: 30vw;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        background-color: rgba(5, 67, 64, 0.95);
        padding: 10px 0px 10px 10px;
        color: white;
        z-index: 1;
        transition: .2s all ease-in-out;
    }

    .translateRightChat {
        transform: translateX(31vw) !important;
    }

    .translateLeftChat {
        transform: translateX(-31vw) !important;
    }

    .chatHeader {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        margin-bottom: 1rem;
    }

    .chatHeader img {
        width: 15px;
    }

    .listMessage {
        max-height: 82vh;
        overflow-y: scroll;
    }

    /* width */
    .listMessage::-webkit-scrollbar {
        width: 10px;
    }

    /* Track */
    .listMessage::-webkit-scrollbar-track {
        background: rgb(8, 103, 98);
    }

    /* Handle */
    .listMessage::-webkit-scrollbar-thumb {
        background: rgb(5, 67, 64);
    }

    /* Handle on hover */
    .listMessage::-webkit-scrollbar-thumb:hover {
        background: rgb(4, 53, 51);
    }

    .listMessage li:not(:last-child) { 
        margin-bottom: 10px;  
    }

    .playerAName, .playerBName {
        font-weight: bold;
    }

    .sendMessage {
        display: flex;
        flex-direction: row;
        align-items: center;
        margin: 1rem 0 3rem 0;
    }

    .sendMessage input {
        border: none;
        padding: 10px;
        width: 80%;
        border-radius: 5px;
        margin-right: 0.5rem;
    }

    .sendMessage input:focus {
        outline: none;
    }

    .sendMessage img {
        width: 25px;
        height: 25px;
        cursor: pointer;
    }

</style>