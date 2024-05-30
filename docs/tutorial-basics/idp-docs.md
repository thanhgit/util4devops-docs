---
sidebar_position: 5
---

# IDP - Documentation

**Documentation** is part of the **Catalog Component** in Util4devops IDP 

It is responsible for the **documentation** related to the catalog component

#### View documentation

![](./media/idp-view-documentation-1.png)

- #### `Step 1:` Click `Docs` button in left sidebar

- #### `Step 2:` Choose a document, then click to it's name to navigate to Documentation page

    ![](./media/idp-view-documentation-2.png)

- ### You can view documentation related to service component

    ![](./media/idp-view-documentation-3.png)

#### Configure documentation in `catalog-info.yaml` file
- #### Reference documentation: https://backstage.io/docs/features/techdocs/creating-and-publishing/

- ### Get documentation source from local source
    ```yaml title="catalog-info.yaml"
    metadata:
    annotations:
        backstage.io/techdocs-ref: dir:.
    ```