<script>
	import {onMount} from 'svelte';
    import group_avatar from '../../lib/images/group_avatar.png';

    onMount(() => {
        let joinButton = document.getElementsByTagName('button');
        for (let i = 0; i < joinButton.length; i++) {
            joinButton[i].addEventListener('click', function(){
                window.location.href = '/game';
            });
        }
    });

</script>

<svelte:head>
	<title>Room Choice</title>
	<meta name="Room" content="Svelte demo app" />
</svelte:head>

<section>
	<div class="box">
        <h1>Rejoindre une salle</h1>
		<div class="tbl-header">
			<table cellpadding="0" cellspacing="0" border="0">
				<thead>
					<tr>
						<th>Room</th>
						<th>Statut</th>
						<th>Joueurs</th>
						<th>Accès</th>
					</tr>
				</thead>
			</table>
		</div>
        <div class="tbl-content">
            <table cellpadding="0" cellspacing="0" border="0">
                <tbody>
                    <!-- For testing, to replace -->
                    <tr>
                        <td>Room_1</td>
                        <td>En attente de joueur</td>
                        <td>1/4 joueurs <img src="{group_avatar}" alt="group avatar image"></td>
                        <td>
                            <button>Rejoindre</button>
                        </td>
                    </tr>
                    <tr>
                        <td>Room_1</td>
                        <td>En attente de joueur</td>
                        <td>1/4 joueurs <img src="{group_avatar}" alt="group avatar image"></td>
                        <td>
                            <button>Rejoindre</button>
                        </td>
                    </tr>
                    <tr>
                        <td>Room_1</td>
                        <td>En attente de joueur</td>
                        <td>1/4 joueurs <img src="{group_avatar}" alt="group avatar image"></td>
                        <td>
                            <button>Rejoindre</button>
                        </td>
                    </tr>
                    <tr>
                        <td>Room_1</td>
                        <td>En attente de joueur</td>
                        <td>1/4 joueurs <img src="{group_avatar}" alt="group avatar image"></td>
                        <td>
                            <button>Rejoindre</button>
                        </td>
                    </tr>
                    <tr>
                        <td>Room_1</td>
                        <td>En attente de joueur</td>
                        <td>1/4 joueurs <img src="{group_avatar}" alt="group avatar image"></td>
                        <td>
                            <button>Rejoindre</button>
                        </td>
                    </tr>
                    <tr>
                        <td>Room_1</td>
                        <td>En attente de joueur</td>
                        <td>1/4 joueurs <img src="{group_avatar}" alt="group avatar image"></td>
                        <td>
                            <button>Rejoindre</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
	</div>
</section>

<style>
	section {
		min-height: 100vh;
		margin: 0;
		background-attachment: fixed;
		background-size: 100vw 100vh;
		background-image: url($lib/images/bg-menu.png);
	}

	.box {
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		background: #000c1cf1;
		padding: 50px;
		border-radius: 25px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
	}

    .box h1 {
        color: white;
        margin-bottom: 2rem;
    }

    table {
        width:100%;
        table-layout: fixed;
    }

    .tbl-header th {
        font-weight: bold;
    }

    .tbl-content {
        height:300px;
        overflow-x:auto;
        margin-top: 0px;
    }

    .tbl-content img {
        width: 18px;
        height: 18px;
        margin-top: -7px;
        position: relative;
        left: 5px;
        top: 4px;
    }

    /* width */
    .tbl-content::-webkit-scrollbar {
        width: 8px;
    }

    /* Track */
    .tbl-content::-webkit-scrollbar-track {
        background: #0d233f;
        border-radius: 10px;
    }

    /* Handle */
    .tbl-content::-webkit-scrollbar-thumb {
        background: #000c1c;
        border-radius: 10px;
    }

    /* Handle on hover */
    .tbl-content::-webkit-scrollbar-thumb:hover {
        background: #000812;
    }

    th {
        padding: 20px 15px;
        text-align: left;
        font-weight: 500;
        font-size: 12px;
        color: #fff;
        text-transform: uppercase;
    }

    td {
        padding: 15px;
        text-align: left;
        vertical-align:middle;
        font-weight: 300;
        font-size: 12px;
        color: #fff;
        border-bottom: solid 1px rgba(255,255,255,0.1);
    }

    .tbl-content button {
        background-color: rgb(72, 100, 135);
        border: none;
        padding: 7px 18px;
        border-radius: 5px;
        color: white;
        font-size: 14px;
        cursor: pointer;
        transition: .1s all ease-in-out;
    }

    .tbl-content button:hover {
        background-color: rgb(25, 49, 77);
    }

</style>
