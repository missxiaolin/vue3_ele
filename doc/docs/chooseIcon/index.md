## 图标选择器

### 基本用法
<br>

<div style="padding: 1em; margin: 1em; border: 1px solid #eee;">
    <l-choose-icon :title="选择图标" v-model:visible="visible">选择图标</l-choose-icon>
</div>

### 代码示例
<script>
import { ref } from 'vue'
let visible = ref(false)
</script>

```js
<l-choose-icon :title="选择图标" v-model:visible="visible">选择图标</l-choose-icon>
<script>
import { ref } from 'vue'
let title = ref('选择图标')
let visible = ref(false)
</script>
```