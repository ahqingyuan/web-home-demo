        // 微信二维码显示/隐藏功能
        const footerWechatIcon = document.getElementById('footer-wechat-icon');
        const footerQrcodeTooltip = footerWechatIcon.parentElement.querySelector('.qrcode-tooltip');

        footerWechatIcon.addEventListener('click', (e) => {
            e.preventDefault();
            footerQrcodeTooltip.classList.toggle('active');
        });

        // 点击其他区域关闭二维码
        document.addEventListener('click', (e) => {
            const footerWechatContainer = document.getElementById('footer-wechat-container');

            if (!footerWechatContainer.contains(e.target)) {
                footerQrcodeTooltip.classList.remove('active');
            }
        });