module.exports = {
    build(name) {
        return {
            type: 'Reference',
            name
        };
    },
    suggest(node, ctx) {
        if (node.range) {
            ctx.range(node.range, 'var');
        }
    },
    compile(node, ctx) {
        if (!ctx.scope.includes(node.name.name) && ctx.tolerant) {
            ctx.put('(typeof $');
            ctx.node(node.name);
            ctx.put('!=="undefined"?$');
            ctx.node(node.name);
            ctx.put(':undefined)');
            return;
        }

        ctx.put('$');
        ctx.node(node.name);
    },
    walk(node, ctx) {
        ctx.node(node.name);
    },
    stringify(node, ctx) {
        ctx.put('$');
        ctx.node(node.name);
    }
};
