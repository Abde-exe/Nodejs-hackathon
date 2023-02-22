<script>

    import './styles.css';
    import {io} from "socket.io-client";
    import {onDestroy, onMount} from "svelte";

    const socket = io('http://localhost:9999');

    let nPlayer = undefined

    onMount(() => {
        socket.on('connect', () => {
            socket.emit("join_room", "room1", nPlayer, (player) => {
                console.log(player)
                    nPlayer = player
                }
            );
        });
        socket.on('disconnect', () => {
            console.log('disconnected');
        });
    })

    onDestroy(() => {
        socket.disconnect();
    })

	socket.on("get_playerInfo", (data) => {console.log(data)});
	

</script>


<main>
  <slot />
</main>


<style lang="scss">


	
</style>
