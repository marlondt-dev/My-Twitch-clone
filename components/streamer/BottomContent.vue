<script setup></script>
<template>
  <section class="content-container">
    <div class="stream">
      <img
        class="stream__img"
        src="https://yt3.ggpht.com/a/AATXAJzuyjCt8K0QD8x_PrTB11LTlvpX2iVWk4eCSQ=s176-c-k-c0xffffffff-no-rj-mo"
      />
      <article class="stream-content">
        <div class="stream-content-top">
          <p class="stream-content-top__text">Miduxeneize</p>
          <div class="stream-content__buttons">
            <MyButton :class="'blue'">Follow</MyButton>
            <MyButton :class="'gray'">Subscribe</MyButton>
          </div>
        </div>
        <div class="stream-content-middle">
          <p class="stream-content-middle__text">
            este es el titulo del stream actual
          </p>
          <div class="stream-content-middle__viewers">Viewers</div>
          <img src="../../public/Frame26.png" />
        </div>
        <p class="stream-content__category">Talk Shows & Podcasts</p>
        <p class="stream-content__tags">tags</p>
      </article>
    </div>
    <p class="about">About Miduuxeneize</p>
    <article class="stream-description">
      <p class="stream-description__text">184M followers</p>
      <p class="stream-description__text">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aspernatur et
        consequatur obcaecati commodi eveniet perspiciatis cupiditate qui
        dolorem, deserunt nihil dicta minus minima eius tenetur asperiores.
        Laboriosam veniam incidunt qui!
      </p>
      <div class="stream-description__rrss">
        <img src="../../public/youtube.png" />
        <img src="../../public/instagram.png" />
        <img src="../../public/twitter.png" />
        <img src="../../public/TikTok.png" />
      </div>
    </article>
  </section>
</template>

<style lang="scss" scoped>
.content-container {
  width: 51.625em;
  height: 23.4375em;
  display: flex;
  flex-direction: column;
  gap: 1.25em;
  padding: 0 0.625em;
}

.stream {
  width: 50.375em;
  height: 8.6875em;
  display: flex;
  justify-content: space-between;

  &__img {
    width: 4em;
    height: 4em;
    border-radius: 62499.9375em;
  }
}

.stream-content {
  width: 45.8125em;
  height: 8.6875em;

  &__buttons {
    display: flex;
    justify-content: space-between;
    gap: 0.5em;
  }

  &-top {
    display: flex;
    justify-content: space-between;
  }

  &-top__text {
    color: var(--btn-text-color);
    font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI",
      Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue",
      sans-serif;
    font-weight: 600;
    font-size: 1.125em;
  }

  &__category {
    color: var(--button-color-blue);
    font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI",
      Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue",
      sans-serif;
    font-size: 0.875em;
    font-weight: 400;
  }

  &__tags {
    background-color: var(--button-color-gray);
    color: var(--text-color-gray);
  }
}

.stream-content-middle {
  width: 45.8125em;
  height: 2.125em;
  display: flex;
  justify-content: space-between;

  &__text {
    font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI",
      Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue",
      sans-serif;
    font-weight: 600;
    font-size: 0.875em;
    color: var(--btn-text-color);
  }

  &__viewers {
    color: rgb(156, 81, 81);
    font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI",
      Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue",
      sans-serif;
    font-weight: 600;
  }
}

.stream-description {
  width: 50.375em;
  height: 10.875em;
}

.about {
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  font-weight: 600;
  font-size: 1.125em;
  color: var(--btn-text-color);
}

.stream-description {
  width: 50.375em;
  height: 10.875em;
  padding: 1.25em;
  background-color: var(--bg-color-gray);
  display: flex;
  flex-direction: column;
  gap: 1.375em;

  &__text {
    color: var(--btn-text-color);
    font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI",
      Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue",
      sans-serif;
    font-size: 0.875em;
    font-weight: 400;
  }

  &__rrss {
    width: 47.875em;
    height: 2.5625em;
    border-top: 0.1em solid gray;
    padding: 1em 0;
  }
}
</style>
