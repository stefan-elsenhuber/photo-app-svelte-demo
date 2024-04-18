<script lang="ts">
    export let data;
</script>

<section>
    <article>
        {#each data.photos as photo}
            <picture >
                <img src={photo.url} alt="photo" />
            </picture>
        {/each}
    </article>
</section>

<style lang="scss">
    
    picture {
        width: 100px;
        height: 100px;
        object-fit: cover;
        img {
            height: 100%;
            width: 100%;
        }
    }
</style>