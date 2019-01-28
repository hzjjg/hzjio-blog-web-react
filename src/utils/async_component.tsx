import * as React from "react";

interface AsyncComponentState {
    Component: any;
}

/**
 * 将组件变为按需加载  
 * usage: const Editor = asyncComponent(()=> import('path/to/component'));
 * @param getComponent 
 */
export default function asyncComponent(getComponent: () => Promise<any>) {
    class AsyncComponent extends React.Component<{}, AsyncComponentState> {

        constructor(props: any) {
            super(props);

            this.state = {
                Component: null
            };
        }

        async componentDidMount() {

            const { default: Component } = await getComponent();

            this.setState({
                Component
            });
        }

        render() {
            const C = this.state.Component;
            return C ? <C {...this.props} /> : <div>....Loading</div>;
        }
    }
    return AsyncComponent;

}