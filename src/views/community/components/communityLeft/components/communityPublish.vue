<script setup lang='ts'>
</script>

<template>
  <div class="community-publish community-card" data-aos="fade-right">
    <div class="community-btn-group">
      <button class="btn primary">写文章</button>
      <button class="btn plain">分享动态</button>
    </div>

    <textarea class="community-content-edit" placeholder="写点东西吧～"/>
    <div class="community-btn-group flex community-content-edit-publish">
      <span></span>
      <button class="btn primary">发表</button>
    </div>
  </div>
</template>

<style lang='scss' scoped>
.community-publish {
  margin-bottom: 20px;
  padding: 10px;
  .community-btn-group {
    margin: 10px;
  }

  .primary,
  .plain {
    color: white;
    margin-right: 10px;
    padding: 8px 20px;
    border-radius: 8px;
    cursor: pointer;

    &:hover {
      opacity: .8;
    }
  }

  .primary {
    color: white;
    background: var(--theme);
  }

  .plain {
    color: #333;
    background: #f8f8f8;
  }

  .community-content-edit {
    width: calc(100% - 20px);
    border-radius: 5px;
    margin: 10px;
    border: 1px solid #eee;
    font-size: .9rem;
    padding: 10px;
    outline: none;
    height: 100px;
    overflow: auto;
    background: #f8f8f8;
    resize: none;
    &:focus {
      border: 1px solid var(--theme);
    }
  }
  .community-content-edit-publish  {
    justify-content: space-between;
    margin: 0;
  }
}
</style>