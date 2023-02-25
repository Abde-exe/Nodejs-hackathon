<script>
    import {onMount, onDestroy} from 'svelte';

    export let text = '';
    export let isActionNeeded = false;

    let intervalId;
    let blinkRef;

    onMount(() => {
        if (isActionNeeded) {
        }
    });

</script>

<style>

    .note__text {
        color: #fff;
        font-weight: 500;
        margin-top: 10px;
    }

    .note__text.blink {
        animation: blink-animation 1.5s ease-in-out infinite;
    }

    @keyframes blink-animation {
        0% {
            opacity: 1;
        }
        50% {
            opacity: .3;
        }
        100% {
            opacity: 1;
        }
    }

    .hidden {
        display: none;
    }
</style>

<p class="note__text" class:blink={isActionNeeded} bind:this={blinkRef}>{text}</p>
