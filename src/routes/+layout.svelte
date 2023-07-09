<script lang="ts">
  import awsmobile from '../aws-exports';
	import { Amplify } from "aws-amplify";
  Amplify.configure(awsmobile);
</script>
<div>
  <slot />
</div>