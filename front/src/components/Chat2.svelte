<script>
    import {onMount} from 'svelte';
</script>
<section>
    <div class="chat2">
        <ul id="listMessage">
        </ul>
    </div>

</section>

<style>

.chat2 {
    position: absolute;
    bottom: 20px;
    right: 20px;
    padding: 15px;
    background: rgb(5, 67, 64);
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
    background: rgb(8, 103, 98);
    border-radius: 10px;
}

/* Handle */
.chat2 ul::-webkit-scrollbar-thumb {
    background: rgb(4, 53, 51);
    border-radius: 10px;
}

/* Handle on hover */
.chat2 ul::-webkit-scrollbar-thumb:hover {
    background: rgb(3, 43, 42);
}

.chat2 ul li:not(:last-child) { 
    margin-bottom: 7px;  
}

</style>