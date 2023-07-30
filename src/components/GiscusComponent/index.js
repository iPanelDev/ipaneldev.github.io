import React from 'react';
import Giscus from "@giscus/react";
import { useColorMode } from '@docusaurus/theme-common';

export default function GiscusComponent() {
    const { colorMode } = useColorMode();

    return (
        <Giscus
            repo="iPanelDev/docs"
            repoId="R_kgDOKBJscg"
            category="giscus"
            categoryId="DIC_kwDOKBJscs4CYNp4"
            term="快来抢沙发！"
            strict="0"
            reactionsEnabled="1"
            emitMetadata="1"
            inputPosition="top"
            theme={colorMode}
            lang="zh-CN"
            loading="lazy"
            crossorigin="anonymous"
            async
        />
    );
}