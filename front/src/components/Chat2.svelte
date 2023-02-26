<script>
    import {onMount} from 'svelte';
</script>
<section>
    <div class="chat2">
        <ul id="listMessage">
            <li>// Test ne pas prendre en compte</li>
        </ul>
    </div>

</section>

<style>

.chat2 {
    position: absolute;
    bottom: 20px;
    right: 20px;
    padding: 15px;
    background: #000c1ce0;
    border-radius: 10px;
    height: 120px;
    width: 300px;
    color: white;
}

.chat2 ul {
    max-height: 100%;
    overflow-y: auto;
}

/* width */
.chat2 ul::-webkit-scrollbar {
    width: 8px;
}

/* Track */
.chat2 ul::-webkit-scrollbar-track {
    background: #0d233f;
    border-radius: 10px;
}

/* Handle */
.chat2 ul::-webkit-scrollbar-thumb {
    background: #000c1c;
    border-radius: 10px;
}

/* Handle on hover */
.chat2 ul::-webkit-scrollbar-thumb:hover {
    background: #000812;
}

.chat2 ul li:not(:last-child) { 
    margin-bottom: 7px;  
}

</style>