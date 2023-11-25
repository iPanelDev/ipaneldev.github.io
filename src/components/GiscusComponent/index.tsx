import React from 'react';
import Giscus from "@giscus/react";
import { useColorMode } from '@docusaurus/theme-common';

export default function GiscusComponent() {
    const { colorMode } = useColorMode();

    return (
        <Giscus
            repo="iPanelDev/ipaneldev.github.io"
            repoId="R_kgDOKBJscg"
            category="Giscus"
            categoryId="DIC_kwDOKBJscs4CYNp4"
            strict="0"
            reactionsEnabled="1"
            emitMetadata="1"
            inputPosition="top"
            theme={colorMode}
            lang="zh-CN"
            loading="lazy"
            mapping='pathname'
        />
    );
}