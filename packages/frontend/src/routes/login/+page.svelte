<script>
    import DiGithubBadge  from 'svelte-icons/di/DiGithubBadge.svelte'
</script>
<!-- luon phai doi qua nvm use 16.17.0  -->
<div class="login flex justify-center items-center bg-[#f4f4f4]">
    <form action="submit" 
    class="flex-row justify-center align-center
     w-[500px]
     border rounded
     bg-white">
    <div class='border-b p-8 max-h-20'>

            <h1 class='font-black text-[#434343] text-xl'>
                Log in to your itch.io account
            </h1>
    </div>

    <div class='p-8'>
        <div class='mb-4'>
            <p class='font-semibold'>Username or email</p>
            <input placeholder="Required"
            class='border-2
            px-2 py-1 w-full'
            />
        </div>
        <div class='mb-4'>
            <p class='font-semibold'>Password</p>
            <input type='password'
            class='border-2
            px-2 py-1 w-full'
            placeholder='Required'/>
        </div>
        <div class='flex  items-center border-b'>
            <div class='mb-4'>

                <button class='bg-[#ff2e51] rounded-sm
                px-2 py-2 mr-2
                text-white font-semibold text-sm'>
                Log in
            </button>
            <span class='text-[#858585]'>
                or
                <a href='#' class='font-semibold text-[#434343] underline'>Create account</a> 
                · 
                <a href='#' class='font-semibold text-[#434343] underline'>Forgot password</a>
            </span>
        </div>
        </div>
        
        <div class='mt-2'>
            <h2 class='font-semibold mb-3'>Or log in with another site</h2>
            <button class='flex justify-center items-center
            py-4 px-1.5
            h-6
            border border-[#ff7c92] rounded-sm
            hover: border-[#]
            '>
            <div class='w-8 h-8 text-[#434343]' >
                <DiGithubBadge  />
            </div>
            <p class = 'text-[#ff2449] font-bold text-sm'>
                    Log in with GitHub
                </p>
            </button>
            
        </div>
       </div>
    </form>
</div>

<style>
    .login {
        position: relative;
        width: 100%;
        height: 90vh;   
        top: 50px;
        
    }
    .header {
        /* position: absolute; */
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
    }
    .login-form {

    }
</style>