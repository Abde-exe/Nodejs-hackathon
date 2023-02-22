<script>
    import Header from './Header.svelte';
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
</script>

<div class="app">
	<Header />

	<main>
		<slot />
	</main>

	<footer>
		<p>visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to learn SvelteKit</p>
	</footer>
</div>

<style lang="scss">
	.app {
		display: flex;
		flex-direction: column;
		min-height: 100vh;
	}

	main {
		flex: 1;
		display: flex;
		flex-direction: column;
		padding: 1rem;
		width: 100%;
		max-width: 64rem;
		margin: 0 auto;
		box-sizing: border-box;
	}

	footer {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		padding: 12px;
	}

	footer {
		font-weight: bold;
	}

	@media (min-width: 480px) {
		footer {
			padding: 12px 0;
		}
	}
</style>
