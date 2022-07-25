<script lang="ts">
import io from 'socket.io-client'
const socket = io("ws://localhost:3000")

function sendMessage() {
    socket.emit("message", "Hello From Client")
}

socket.on("connect", () => {
  console.log("socket id: " + socket.id); // x8WIv7-mJelg7on_ALbx
});
</script>


<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>
<button on:click={sendMessage}></button>
